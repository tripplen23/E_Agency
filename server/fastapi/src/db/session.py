from sqlmodel import create_engine, Session
from fastapi import Depends
from db.models import SQLModel
from typing import Generator

DATABASE_URL = "sqlite:///./db.sqlite3"
engine = create_engine(DATABASE_URL)

def create_tables():
    SQLModel.metadata.create_all(engine)

def get_session() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session

SessionDeps = Depends(get_session)
