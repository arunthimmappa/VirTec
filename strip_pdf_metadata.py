#!/usr/bin/env python3
"""
Strip all metadata, author info, edit logs, comments, and annotations
from PDFs in the virtec public folder.
"""

import pikepdf
from pathlib import Path
import shutil
import sys

PUBLIC_DIR = Path(__file__).parent / "public"
PDF_DIRS = ["catalogs", "certificate", "manuals", "test-facilities"]


def _scrub_docinfo(pdf: pikepdf.Pdf) -> None:
    """Wipe DocInfo dictionary entries."""
    if "/Info" in pdf.trailer:
        info = pdf.trailer["/Info"]
        for key in list(info.keys()):
            try:
                del info[key]
            except Exception:
                pass


def _scrub_structure(pdf: pikepdf.Pdf) -> None:
    """Remove annotations, piece-info, forms, and embedded files from every page."""
    for page in pdf.pages:
        if "/Annots" in page:
            del page["/Annots"]
        for key in ["/PieceInfo", "/LastModified", "/Tabs"]:
            if key in page:
                try:
                    del page[key]
                except Exception:
                    pass

    for key in ["/PieceInfo", "/AcroForm"]:
        if key in pdf.Root:
            try:
                del pdf.Root[key]
            except Exception:
                pass

    if "/Names" in pdf.Root:
        names = pdf.Root["/Names"]
        if "/EmbeddedFiles" in names:
            try:
                del names["/EmbeddedFiles"]
            except Exception:
                pass


def strip_pdf(pdf_path: Path) -> bool:
    tmp = pdf_path.with_suffix(".pdf.tmp")
    try:
        with pikepdf.open(pdf_path) as pdf:
            _scrub_docinfo(pdf)
            _scrub_structure(pdf)

            # Delete the XMP Metadata stream entirely from the Root.
            # pikepdf re-stamps Producer/MetadataDate during save() via
            # open_metadata(); deleting /Metadata prevents that stream from
            # being written at all, producing a metadata-free PDF.
            if "/Metadata" in pdf.Root:
                try:
                    del pdf.Root["/Metadata"]
                except Exception:
                    pass

            pdf.save(
                tmp,
                linearize=True,
                object_stream_mode=pikepdf.ObjectStreamMode.generate,
            )

        shutil.move(str(tmp), str(pdf_path))
        print(f"  ✓  {pdf_path.name}")
        return True

    except Exception as e:
        if tmp.exists():
            tmp.unlink()
        print(f"  ✗  {pdf_path.name}  —  {e}", file=sys.stderr)
        return False


def main():
    pdfs = []
    for folder in PDF_DIRS:
        d = PUBLIC_DIR / folder
        if d.exists():
            pdfs.extend(d.glob("*.pdf"))

    if not pdfs:
        print("No PDFs found.")
        return

    print(f"Stripping metadata from {len(pdfs)} PDF(s)...\n")
    ok = sum(1 for p in pdfs if strip_pdf(p))
    print(f"\nDone — {ok}/{len(pdfs)} PDFs cleaned.")


if __name__ == "__main__":
    main()
