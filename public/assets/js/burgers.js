const addBtn = document.getElementById('addBurg');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('It is being clicked!');
    console.log(document.getElementById('brg').value);
    // All data comes from the input fields
    const newBurger = {
        burger_name: document.getElementById('brg').value.trim(),
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
            alert(`Adding burger: ${newBurger.burger_name}!`);
            location.reload('/');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(error);
        });

    // Dump the content of the input boxes
    document.getElementById('brg').value = '';
});

const devourBtns = document.querySelectorAll('.devBurg');

devourBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('data-id');
        const devourBurger = e.target.getAttribute('data-devoured');

        const newDevourState = {
            devoured: devourBurger,
        };

        console.log(id, 'burgers.js:48');
        console.log(devourBurger, 'burgers.js:49');
        console.log(newDevourState, 'burgers.js:50');
        console.log(JSON.stringify(newDevourState), 'burgers.js:51');

        fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDevourState),
        }).then((response) => {
            if (response.ok) {
                console.log(`burger is now ${devourBurger}`);
                location.reload('/');
            } else {
                alert('Woops! Something went wrong!')
            }
        });
    });
});