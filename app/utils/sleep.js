export default async function sleep(time) {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}
