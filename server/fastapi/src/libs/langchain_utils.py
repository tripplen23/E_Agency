from langchain_ollama import OllamaLLM
from langchain.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

def get_llm_chain():
    template = PromptTemplate.from_template("""
    {context}
    {context_db}
    Answer the following question:
    {question}
    Answer here:
    """)
    llm = OllamaLLM(base_url="http://localhost:11434", model="qwen2.5-coder:1.5b")
    return template | llm | StrOutputParser()
