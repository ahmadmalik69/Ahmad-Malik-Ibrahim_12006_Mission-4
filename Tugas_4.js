function click() {

    
    let clickButton = document.getElementById("Submit")
    

    clickButton.addEventListener('click', function() {
        let nomorInput = document.getElementById("Nomor")
        let nomor = parseInt(nomorInput.value) || 0
        nomor++
        nomorInput.value = nomor
        let nama = document.getElementById("Nama").value
        let jabatan = document.getElementById("Jabatan").value
        
        let containerDone = document.getElementById("completedContainer")
        let container = document.getElementById("listContainer")
        

        let tugas = document.getElementById("Tugas").value
        let hari = document.getElementById("Hari").value
        let tanggal = document.getElementById("Tanggal").value
        let priority = document.getElementById("Priority").value
        let childElm = document.createElement('div')
        
        childElm.innerHTML = `
        <div class="To_Do w-72 p-5 border border-gray-300 rounded-lg bg-white shadow-md">
            <div class="flex justify-between items-center mb-2">
                <div class="No mb-4">
                    No. <div class="inline-block ml-2 p-1 bg-gray-200 rounded">${nomor}</div>
                </div><button class="delete text-red-500">Delete</button>
            </div>
            <div class="Profile p-4 border border-gray-300 rounded bg-green-100 mb-4">
                Profile
                <div class= "w-full p-2 border border-gray-300 rounded mt-2 bg-white">${nama}</div>
                <div class= "w-full p-2 border border-gray-300 rounded mt-2 bg-white">${jabatan}</div>
            </div>
            <div class="Text p-4 border border-gray-300 rounded bg-red-100 mb-4">
                Tugas
                <div class= "w-full p-2 border border-gray-300 rounded mt-2 bg-white">${tugas}</div>
            </div>
            <div class="Time p-4 border border-gray-300 rounded bg-blue-100 mb-4">
                Time
                <div class= "w-full p-2 border border-gray-300 rounded mt-2 bg-white">${hari}</div>
                <div class= "w-full p-2 border border-gray-300 rounded mt-2 bg-white">${tanggal}</div>
            </div>
            <div class="Priority p-4 border border-gray-300 rounded bg-yellow-100 mb-4">
                Prioritas
                <div class= "w-full p-2 border border-gray-300 rounded mt-2 bg-white">${priority}</div>
            </div>
            <input type="checkbox" id="check" class="check">Mark as Done
        </div>`;

        container.appendChild(childElm);
        document.getElementById("Nomor").value = ''
        document.getElementById("Nama").value = ''
        document.getElementById("Jabatan").value = ''
        document.getElementById("Tugas").value = ''
        document.getElementById("Hari").value = ''
        document.getElementById("Tanggal").value = ''
        document.getElementById("Priority").value = ''

        const checkbox = childElm.querySelector('.check')
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                container.removeChild(childElm)
                containerDone.appendChild(childElm)
                childElm.style.textDecoration = 'line-through'
            } else {
                childElm.style.textDecoration = 'none'
                container.appendChild(childElm)
                containerDone.removeChild(childElm)
            }
        });

        let deleteButton = childElm.querySelector('.delete')
        deleteButton.addEventListener('click', function() {
            container.removeChild(childElm)
            containerDone.removeChild(childElm)
        })
    });
}



click()