import React, { useState } from "react";
import Quick_Updates_child from "./Quick_Updates_child";
const Quick_Updates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useState(() => {
    const queryString = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a52fece7bc6241f399931cd3c4decdd0`;

    fetch(queryString)
      .then((res) => res.json())
      .then((response) => {
        setData([]);
        for (let i = 0; i < response.articles.length; i++) {
          setData((prev) => [
            ...prev,
            {
              author: response.articles[i].author,
              title: response.articles[i].title,
              description: response.articles[i].description,
              content: response.articles[i].content,
              urll: response.articles[i].url,
              image_url: response.articles[i].urlToImage,
            },
          ]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        console.log("error in fetching ", err);
      });
  }, []);
  const formSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    const country_name = e.target.country_name.value;
    const category_name = e.target.category_name.value;
    const words_name = e.target.specific_words_name.value;
    console.log(country_name, category_name, words_name);
    const queryString = `https://newsapi.org/v2/top-headlines?country=${country_name}&category=${category_name}&q=${words_name}&apiKey=a52fece7bc6241f399931cd3c4decdd0`;
    console.log(queryString);
    fetch(queryString)
      .then((res) => res.json())
      .then((response) => {
        setData([]);
        for (let i = 0; i < response.articles.length; i++) {
          setData((prev) => [
            ...prev,
            {
              author: response.articles[i].author,
              title: response.articles[i].title,
              description: response.articles[i].description,
              content: response.articles[i].content,
              urll: response.articles[i].url,
              image_url: response.articles[i].urlToImage,
            },
          ]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        console.log("error in fetching ", err);
      });
  };
  return (
    <div className="for_footer_color" id="quickUpdates_container">
      <div id="quickUpdates_container_title">Quick Updates</div>
      <div id="quickUpdates_container_main">
        <div id="quickUpdates_container_main_left">
          <div id="quickUpdates_container_main_left_title">Filters</div>
          <form
            id="quickUpdates_container_main_left_query_form"
            onSubmit={formSubmit}
          >
            <div id="quickUpdates_container_main_left_country">
              <div id="quickUpdates_container_main_left_country_give">
                Enter country name
              </div>
              <input
                name="country_name"
                type="text"
                placeholder="enter country name"
              ></input>
            </div>
            <div id="quickUpdates_container_main_left_category">
              <div id="quickUpdates_container_main_left_category_give">
                Enter category{" "}
              </div>
              <input
                name="category_name"
                type="text"
                placeholder="enter category name"
              ></input>
            </div>

            <div id="quickUpdates_container_main_left_query">
              <div id="quickUpdates_container_main_left_query_give">
                Enter query
              </div>
              <input
                name="specific_words_name"
                type="text"
                placeholder="enter specific words"
              ></input>
            </div>

            <button id="quickUpdates_container_main_left_but" type="submit">
              Get News
            </button>
          </form>
        </div>

        <div id="quickUpdates_container_main_right">
          {loading
            ? "Loading"
            : data.map((cur_data, index) => {
                return (
                  <Quick_Updates_child
                    key={index}
                    author={cur_data.author}
                    title={cur_data.title}
                    description={cur_data.description}
                    content={cur_data.content}
                    url={cur_data.urll}
                    image_url={cur_data.image_url}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Quick_Updates;
