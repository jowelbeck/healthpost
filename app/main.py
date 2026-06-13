from fastapi import FastAPI
from pydantic import BaseModel
from app.rag import retrieve_documents
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class CaseQuery(BaseModel):
    animal: str
    symptoms: str


@app.post("/query")
def analyze_case(query: CaseQuery):
    return {
        "possible_causes": ["Injury", "Infection", "Diet issue"],
        "recommendation": "Monitor the animal and consult a vet if symptoms persist.",
        "urgency": "medium",
        "disclaimer": "This is not a medical diagnosis.",
    }
@app.post("/rag-test")
def rag_test(query: CaseQuery):
    results = retrieve_documents(query.animal, query.symptoms)

    return {
        "query": results["query"],
        "matches": results["documents"],
    }