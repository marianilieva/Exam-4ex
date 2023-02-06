let users = "";

$(function()    {
    $.ajax ({
        url: 'https://blacatzacademy.com/api/users',
        type: 'get',
        success: function(response) {
            users = response;
            show(users);
            
            $('#show').click(function() {
                filterOne(users);
            });
        }
    }); 
})

function show(chosen)  {
    let html = "";
    html += '<table>';
    html += '<th>Name</th><th>Category</th><th>Price</th><th>Quantity</th><th>Salary</th>';

    for (let i = 0; i< chosen.length; i++)  {
        html += '<tr>';
        html += `<td class="t-c">${chosen[i].id}</td>`;
        html += `<td>${chosen[i].name}</td>`;
        html += `<td>${chosen[i].lastName}</td>`;
        html += `<td>${chosen[i].age}</td>`;
        html += `<td>${chosen[i].salary}</td>`;
        html += '</tr>';
    }

    html += '</table';
    $('#container').html(html);
}

function filterOne(all)    {
    let rest = all;  
    let search = $('#search');
    search = parseInt (search.val());
    if ($.isNumeric(search) && search >=1 && search <=5)    {
        $.ajax ({
            url: `https://blacatzacademy.com/api/users?id=${search}`,
            type: 'get',
            success: function(response) {
                show(response);
            }
        }); 
    }

    show(rest);
}