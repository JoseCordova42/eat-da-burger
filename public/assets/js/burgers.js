const addBtn = document.getElementById('addBurg');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('It is being clicked!');
    console.log(document.getElementById('brg').value);
    // All data comes from the input fields
    const newBurger = {
        name: document.getElementById('brg').value.trim(),
    };

    // Send POST request using the fetch API
    fetch('/api/burgers', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBurger),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success in adding burger:', data);
            alert(`Adding burger: ${newBurger.name}!`);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(error);
        });

    // Dump the content of the input boxes
    document.getElementById('brg').value = '';
});