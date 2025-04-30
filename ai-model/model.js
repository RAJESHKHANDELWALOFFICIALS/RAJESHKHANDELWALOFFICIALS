const { spawn } = require('child_process');

function predictWithModel(inputData) {
  return new Promise((resolve, reject) => {
    const python = spawn('python', ['path-to-your-ai-model/script.py', inputData]);
    python.stdout.on('data', (data) => {
      resolve(data.toString());
    });
    python.stderr.on('data', (data) => {
      reject(data.toString());
    });
  });
}

module.exports = { predictWithModel };
