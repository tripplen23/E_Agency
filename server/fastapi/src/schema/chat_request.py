from pydantic import BaseModel, Field
from typing import Optional

class ChatRequest(BaseModel):
    prompt: str = Field(default="How to code the fast API routers?")
    context: Optional[str] = Field(default="")