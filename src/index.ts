import { IContact } from "./Models/contacts";

class Helper {
    constructor() {
        // pražnjenje forme
        let btn = document.getElementById("clearForm");
        btn.addEventListener("click", (e:Event) => this.clearForm());
        // za submit
        let btnSubmit = document.getElementById("submit");
        btnSubmit.addEventListener("click", (e:Event) => this.handleSubmit());
        // prikaz liste
        window.addEventListener("load", (e:Event) => this.list());
        // punjenje forme iz liste
        var ul = document.querySelector('table');
        ul.addEventListener('click', (e:Event) => this.showDataFromList(e));
    }

    clearForm(){
        const dirtyFormID = 'form';
        const resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
        resetForm.reset();
    }

    handleSubmit(){
        console.log("test")
        let contacts : IContact[] = JSON.parse(localStorage.getItem("contact")) ?? [];

        const newContact : IContact = {
            name: (document.getElementById("name") as HTMLInputElement).value,
            city: (document.getElementById("city") as HTMLInputElement).value,
            street: (document.getElementById("street") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            surname: (document.getElementById("surname") as HTMLInputElement).value,
            zip:Number((document.getElementById("zip") as HTMLInputElement).value),
            phone: (document.getElementById("phone") as HTMLInputElement).value,
        }

        contacts.push(newContact);

        localStorage.setItem("contact", JSON.stringify(contacts));

    }

    list(){
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        let contacts : IContact[] = JSON.parse(localStorage.getItem("contact")) ?? [];
        let tableRef = document.getElementById('myTable1').getElementsByTagName('tbody')[0];


        contacts.forEach(c => {
            let rowsAdd = tableRef.insertRow();

            let newCell = rowsAdd.insertCell();
                newCell.innerHTML = "<tr><td><span>"+c.name+"</span></td></tr><tr></tr>";
                newCell.style.width = '70px';

                newCell = rowsAdd.insertCell();
                newCell.innerHTML = "<tr><td><span>"+c.city+"</span></td></tr><tr></tr>";
                newCell.style.width = '55px';

                newCell = rowsAdd.insertCell();
                newCell.innerHTML ="<tr><td><span>"+c.email+"</span></td></tr><tr></tr>";
                newCell.style.width = '55px';


                newCell = rowsAdd.insertCell();
                newCell.innerHTML = "<tr><td><span>"+c.surname ?? ""+"</span></td></tr><tr></tr>";
                newCell.style.width = '55px';
                newCell = rowsAdd.insertCell();

                newCell.innerHTML = "<tr><td><span>"+c.zip ?? ""+"</span></td></tr><tr></tr>";
                newCell.style.width = '55px';


                newCell.innerHTML = "<tr><td><span>"+c.street+"</span></td></tr><tr></tr>";
                newCell.style.width = '55px';

                newCell = rowsAdd.insertCell();
                newCell.innerHTML ="<tr><td><span>"+c.phone+"</span></td></tr><tr></tr>";
                newCell.style.width = '55px';


           /* const p = document.createElement('p');
            p.innerText = c.name;
            li.append(p);

            ul.prepend(li);*/
        });
    }

    showDataFromList(e:Event){
        // @ts-ignore
       /* (document.getElementById("name") as HTMLInputElement).value = e.target.innerText;
        (document.getElementById("city") as HTMLInputElement).value = e.target.innerText;
        (document.getElementById("street") as HTMLInputElement).value = e.target.innerText;
        (document.getElementById("zip") as HTMLInputElement).value = e.target.innerText;
        (document.getElementById("surname") as HTMLInputElement).value = e.target.innerText;
        (document.getElementById("email") as HTMLInputElement).value = e.target.innerText;
        (document.getElementById("phone") as HTMLInputElement).value = e.target.innerText;
*/


    }
}

new Helper();
