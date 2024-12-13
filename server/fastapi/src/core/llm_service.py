from libs.langchain_utils import get_llm_chain
from db.models import DataChat
from schema.chat_request import ChatRequest
from sqlmodel import Session

def handle_prompt(chat_request: ChatRequest, session: Session) -> str:
    llm_chain = get_llm_chain()
    
    result = llm_chain.invoke({
        "context": chat_request.context,
        "context_db": "Reference answer from existing data",
        "question": chat_request.prompt
    })
    
    chat = DataChat(prompt=chat_request.prompt, result=result)
    session.add(chat)
    session.commit()
    
    return result