// Only fetch - users Javascript file
let currentPage = 1;
let totalPages;

function getUsers(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then(function(response) {
        if (response.status !== 200) {
            throw response.status;
        }
        return response.json();
    })
    .then(function(responseData) {
        var fragment = document.createDocumentFragment();
        
        responseData.data.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('li-users');

            let span = document.createElement('span');
            span.textContent = item.first_name;

            let img = document.createElement('img');
            img.src = item.avatar;
            img.classList.add('image-wraper');

            li.appendChild(img);
            li.appendChild(span);

            fragment.appendChild(li);
        });

        document.getElementById('list').innerHTML = ' ';
        document.getElementById('list').appendChild(fragment);

        totalPages = responseData.total_pages;
        
    })
    .catch(function(error) {
        if (error == 404) {
            let p = document.createElement('p');
            p.textContent = 'Page Not Found';
            p.classList.add('error-text');

            document.getElementById('api').appendChild(p);
        }
        else {
                let p = document.createElement('p');
                p.textContent = 'Server Error';
                p.classList.add('error-text');

                document.getElementById('api').appendChild(p);
        }
    })
}


document.getElementById('previous').addEventListener('click', function() {
    if (currentPage === 1) {
        return;
    }

    currentPage -=1;
    getUsers(currentPage);
});


document.getElementById('next').addEventListener('click', function() {
    if (currentPage === totalPages) {
        return;
    }

    currentPage +=1;
    getUsers(currentPage);
});



getUsers(currentPage);

document.getElementById('next').addEventListener('click', function(){
    console.log('მომხმარებელი ათვალიერებს ჩვენს გალერეას')
});
document.getElementById('previous').addEventListener('click', function(){
    console.log('მომხმარებელი ათვალიერებს ჩვენს გალერეას')
});
