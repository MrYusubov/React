function AddForm({ productsArray, setProductsArray }) {
  function handleForm(ev) {
    ev.preventDefault();
    let newArr = [...productsArray];
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    formData.id = newArr.length === 0 ? 1 : newArr.at(-1).id + 1;
    console.log(formData);
    newArr.push(formData);
    setProductsArray(newArr);
    ev.target.reset();
  }

  function handleDelete(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    let idToDelete = parseInt(formData.id);
    if (isNaN(idToDelete)) {
      alert("Zəhmət olmasa düzgün ID daxil edin!");
      return;
    }
    let newArr = productsArray.filter((product) => product.id !== idToDelete);
    if (newArr.length === productsArray.length) {
      alert("Bu ID ilə məhsul tapılmadı!");
    } else {
      alert(`ID-${idToDelete} məhsulu uğurla silindi!`);
    }
    setProductsArray(newArr);
    ev.target.reset(); 
  }

  return (
    <div>
      <span className="add">
      <form onSubmit={handleForm}>
        <input type="text" name="productName" placeholder="productName" />
        <input
          type="text"
          name="productDecription"
          placeholder="productDecription"
        />
        <label>
          HAS IN STOCK
          <input type="checkbox" name="active" />
        </label>
        <button>ADD</button>
      </form>
      </span>
      <form onSubmit={handleDelete} style={{ marginTop: "20px" }}>
        <input type="number" name="id" placeholder="Product ID to delete" />
        <button>DELETE</button>
      </form>
    </div>
  );
}

export default AddForm;
