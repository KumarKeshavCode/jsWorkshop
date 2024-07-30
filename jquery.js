// $(document).ready(function(){
//     $("#btn").click(function(){
//         $("p").text("change hua");
//     })
// })

$(document).ready(function(){
    $("#nav").click(function(){
        $("h1").hover("color", "yellow");
    });
})


$(document).ready(function() {
    let debounceTimer;
    $('#search').on('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            const query = $('#search').val().toLowerCase();
            if (query) {
                $.ajax({
                    
                    url: 'http://localhost:3000/fruits',
                    method: 'GET',
                    dataType: 'json',
                    
                    success: function(data) {
                        const fruits=data
                        const result=fruits.filter((fruit) => fruit.toLowerCase().includes(query));
                        // const results = data.fruits[0].fruit.filter(fruit => fruit.toLowerCase().includes(query));
                        displayResults(result);
                    }
                    
                   
                },
                
            );
            } 
            else {
                $('#searchresult').empty();
            }
        }, 0); 
    });

    function displayResults(results) {
        const $searchResult = $('#searchresult');
        $searchResult.empty();
        if (results.length) {
            const $ul = $('<ul></ul>');
            results.forEach(result => {
                $ul.append(`<li>${result}</li>`);
            });
            $searchResult.append($ul);
        } else {
            $searchResult.append('<p>No results found</p>');
        }
    }

});
    
    
//     $(document).ready(function() {
//         let debounceTimer;
//         $('#search').on('input', function() {
//             clearTimeout(debounceTimer);
//             debounceTimer = setTimeout(function() {
//                 const query = $('#search').val().toLowerCase();
//                 if (query) {
//                     $.ajax({
//                         url: 'http://localhost:3000/fruits',
//                         method: 'GET',
//                         dataType: 'json',
//                         success: function(data) {
//                             console.log(data); // Log the data to see its structure
//                             if (data.fruits && data.fruits[0] && data.fruits[0].fruit) {
//                                 const results = data.fruits[0].fruit.filter(fruit => fruit.toLowerCase().includes(query));
//                                 displayResults(results);
//                             } else {
//                                 console.error('Unexpected data structure:', data);
//                             }
//                         }
//                     });
//                 } else {
//                     $('#searchresult').empty();
//                 }
//             }, 300); // Adjust the debounce delay as needed
//         });
    
//         function displayResults(results) {
//             const $searchResult = $('#searchresult');
//             $searchResult.empty();
//             if (results.length) {
//                 const $ul = $('<ul></ul>');
//                 results.forEach(result => {
//                     $ul.append(`<li>${result}</li>`);
//                 });
//                 $searchResult.append($ul);
//             } else {
//                 $searchResult.append('<p>No results found</p>');
//             }
//         }
//     });
// });



