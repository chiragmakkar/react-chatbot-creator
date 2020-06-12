import sleep from './sleep';
import SafeEval from 'safe-eval';

export default function safeEval(input, code) {
  return new Promise(async (resolve, reject) => {
    try {
      const output = SafeEval(code, window);
      await sleep(1500);
      if (typeof output === 'function') {
        const result = output.call(output, input);
        return resolve(result);
      }
      return reject('Invalid code.');
    } catch (error) {
      return console.log(error) || reject('Something went wrong.');
    }
  });
}
