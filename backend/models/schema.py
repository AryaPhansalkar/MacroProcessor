from pydantic import BaseModel

class MacroRequest(BaseModel):
    code: str
    mode: str