from fastapi import APIRouter
from services.macro_processor import run_macro_processor
from models.schema import MacroRequest


router = APIRouter()

@router.post("/run")
def run_macro(req: MacroRequest):
    result = run_macro_processor(req.code, req.mode)
    return result