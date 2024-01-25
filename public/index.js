function handleSubmit(evt) {
	alert('Form submitted successfully!');
};

function handleDelete(event) {
    const { target } = event;
    const removeRes = target.parentNode;
    console.log(removeRes);
    const delRes = removeRes.querySelector('h2').innerText;
    alert(`${delRes} deleted!`);
    removeRes.remove()
    axios.delete(`/delete/${delRes}`)
    .then(res => {
        alert('Restaurant deleted!');
    })
};

const buttons = document.querySelector('#add');
function button() {
    prompt('Add a new RRR')
};

const forms = document.querySelectorAll('.form') 
for(let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', handleSubmit)
};

const deleteRes = document.querySelectorAll('.delete-btn')
for(let i = 0; i < deleteRes.length; i++) {
    deleteRes[i].addEventListener('click', handleDelete)
};

