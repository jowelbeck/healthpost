from pathlib import Path
from chromadb import PersistentClient
from sentence_transformers import SentenceTransformer

BASE_DIR = Path(__file__).resolve().parent.parent
CHROMA_DIR = BASE_DIR / "chroma_db"

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")
chroma_client = PersistentClient(path=str(CHROMA_DIR))
collection = chroma_client.get_or_create_collection(name="vet_knowledge")

def retrieve_documents(animal: str, symptoms: str, n_results: int = 3):
    query_text = f"{animal}. Symptoms: {symptoms}"
    query_embedding = embedding_model.encode(query_text).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
    )

    documents = results.get("documents", [[]])[0]

    return {
        "query": query_text,
        "documents": documents,
    }