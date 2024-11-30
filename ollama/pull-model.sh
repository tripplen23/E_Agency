./bin/ollama serve &

pid=$!

sleep 5

echo "Pull model qwen"
ollama pull qwen2.5-coder:1.5b

wait $pid