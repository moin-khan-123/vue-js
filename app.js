const moinData = () => {
  const myData = {
    moin: "hello I'm moinkhan",
    innerHtml: `<h1 style="color:red">Hello World</h1>`,
    person: {
      name: "moin khan",
      age: 23,
      website: "https://jobkhuzi.com/",
    },
  };
  return myData;
};

const app = Vue.createApp({ data: moinData });

app.mount("#app");