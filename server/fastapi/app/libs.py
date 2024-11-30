# Langchain
from langchain_ollama import OllamaLLM
from langchain_ollama.llms import BaseLLM
from langchain.chains.llm import LLMChain 
from langchain.chains.sql_database.query import create_sql_query_chain
from langchain.prompts import PromptTemplate
from langchain_community.tools import QuerySQLDataBaseTool
from langchain.sql_database import SQLDatabase
from langchain_core.output_parsers import StrOutputParser, PydanticOutputParser 
from langchain_core.runnables import RunnablePassthrough
from operator import itemgetter
# Cache
from langchain.cache import InMemoryCache
from langchain.globals import set_llm_cache