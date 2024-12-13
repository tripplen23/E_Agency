from sqlmodel import SQLModel, Field
from typing import Optional

class DataChat(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    prompt: str
    result: str
