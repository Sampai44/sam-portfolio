<!-- app/components/CodePlayground.vue -->
<template>
  <div class="playground-box block">
    <h3>Logic Playground</h3>
    <p>I built this for my students to practice basic JavaScript logic. Try it out!</p>
    
    <div class="editor-container">
      <div class="editor-header">
        <span>main.js</span>
        <button @click="runCode" class="run-btn">Run Code</button>
      </div>
      <textarea 
        v-model="userCode" 
        spellcheck="false" 
        class="code-input"
        placeholder="// Try: let x = 10; console.log(x * 2);"
      ></textarea>
    </div>

    <div class="output-container">
      <div class="output-header">Console Output</div>
      <pre class="output-body">{{ output || 'Waiting for input...' }}</pre>
    </div>
  </div>
</template>

<script setup>
const userCode = ref(`// Calculate a simple math problem
let students = 20;
let worksheets = 5;
console.log("Total papers to grade: " + (students * worksheets));`)

const output = ref('')

const runCode = () => {
  output.value = ""
  const logs = []
  
  // Custom console.log to intercept output
  const customConsole = {
    log: (msg) => logs.push(String(msg))
  }

  try {
    // We use a Function constructor for a slightly safer "eval"
    // We pass our custom console as a local variable
    const script = new Function('console', userCode.value)
    script(customConsole)
    output.value = logs.join('\n') || "Code ran successfully (no output)."
  } catch (err) {
    output.value = "Error: " + err.message
  }
}
</script>

<style scoped>
.playground-box { margin-top: 30px; border-color: #8338ec; }
.editor-container { background: #1e1e1e; border-radius: 6px; overflow: hidden; margin-top: 15px; border: 2px solid #000; }
.editor-header { background: #333; padding: 8px 15px; color: #fff; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; font-family: monospace; }
.code-input { width: 100%; height: 150px; background: transparent; color: #00ff00; border: none; padding: 15px; font-family: 'Fira Code', monospace; font-size: 0.9rem; resize: none; outline: none; }
.run-btn { background: #00bf63; border: none; color: white; padding: 4px 12px; border-radius: 4px; font-weight: 800; cursor: pointer; }
.run-btn:hover { background: #009e52; }

.output-container { margin-top: 15px; background: #f4f4f5; border: 2px solid #000; border-radius: 4px; }
.output-header { background: #000; color: #fff; padding: 5px 12px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; }
.output-body { padding: 12px; font-family: monospace; font-size: 0.9rem; color: #111; white-space: pre-wrap; margin: 0; min-height: 40px; }
</style>
