
        function submit() {

        let Quizes = document.getElementById(`Quizes`);
        let Midterm = document.getElementById(`Midterm`);
        let FinalTest = document.getElementById(`FinalTest`);
        let Oral = document.getElementById(`Oral`);
        let total_grades = document.getElementById (`total_grades`);
        let final_grade = document.getElementById(`final_grade`);
        
    
        total_grades.innerHTML = ((Quizes.value/4) + (Midterm.value/4) + (FinalTest.value/4) + (Oral.value/4));
     

        if(total_grades.innerHTML >= 90){
          final_grade.innerHTML = ["A"]; 
          
          }
            
          else if(total_grades.innerHTML <= 89 && total_grades.innerHTML >= 80){
            final_grade.innerHTML = final_grades =  ["B"]; 
          }
          
          else if(total_grades.innerHTML<= 79 && total_grades.innerHTML >= 70){
            final_grade.innerHTML = final_grades =  ["C"]; 
          }
          
          else if(total_grades.innerHTML <= 69 && total_grades.innerHTML >= 60){
            final_grade.innerHTML = final_grades =  ["D"];       
          }
  
          else {
            final_grade.innerHTML = final_grades =  ["F"];         
          }
        }