from fastapi import APIRouter, Depends
from schema.chat_request import ChatRequest
from core.llm_service import handle_prompt
from db.session import SessionDeps

router = APIRouter()

@router.post("/prompt")
def prompt(chat_request: ChatRequest, session=Depends(SessionDeps)):
    result = handle_prompt(chat_request, session)
    return {"result": result}