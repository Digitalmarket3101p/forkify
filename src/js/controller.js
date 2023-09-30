// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showrecipe = async function () {
  try {
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(res, data);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceurl: recipe.source_url,
      img: recipe.image_url,
      serving: recipe.servings,
      cookingtime: recipe.cooking_time,
      ingredians: recipe.ingredients,
    };
    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};

showrecipe();
