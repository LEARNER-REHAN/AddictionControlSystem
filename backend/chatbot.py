import requests

def generate_ai_reply(user_message: str):

    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "llama3",
                "prompt": f"""
You are a compassionate AI recovery assistant helping users overcome addiction.

User message:
{user_message}

Respond in a motivational, supportive, and practical way.
Keep it short and helpful.
""",
                "stream": False
            }
        )

        result = response.json()

        return result.get("response", "I'm here to support you.")

    except Exception as e:
        print("Ollama Error:", e)
        return "⚠️ AI server error. Make sure Ollama is running."