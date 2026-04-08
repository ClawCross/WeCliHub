"""Vercel Python entrypoint for legacy WeCliHub Flask app."""

from pathlib import Path
import importlib.util

BASE_DIR = Path(__file__).resolve().parent.parent
LEGACY_APP = BASE_DIR / "weclihub.py"

spec = importlib.util.spec_from_file_location("legacy_weclihub", LEGACY_APP)
if spec is None or spec.loader is None:
    raise RuntimeError(f"Cannot load legacy app from {LEGACY_APP}")

module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

app = module.app
