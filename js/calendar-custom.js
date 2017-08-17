/**
 *  Copyright 2017 Brigham Young University
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

window.onload = function () {
    const CURRENT_YEAR= new Date().getFullYear();
    const CURRENT_HALF = (new Date().getMonth() < 6) ? 1 : 2;
    var selectedYear = CURRENT_YEAR;
    var selectedHalf = CURRENT_HALF;
    var nextButtons = document.getElementsByClassName('calendar-next-btn');
    var prevButtons = document.getElementsByClassName('calendar-prev-btn');
    //display current calendar
    document.getElementById(selectedYear+"-"+selectedHalf).classList.remove('hidden');
    for(var i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", nextCal);
    }
    for(var i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener("click", prevCal);
    }

    function prevCal() {
        console.log('re!');
        document.getElementById(selectedYear+"-"+selectedHalf).classList.add('hidden');
        if(selectedHalf === 2) {
            selectedHalf = 1;
        } else {
            selectedHalf = 2;
            selectedYear -= 1;
        }
        displayCalendar(selectedYear, selectedHalf);
    }

    function nextCal() {
        console.log('next');
        document.getElementById(selectedYear+"-"+selectedHalf).classList.add('hidden');
        if(selectedHalf === 1) {
            selectedHalf = 2;
        }
        else {
            selectedHalf = 1;
            selectedYear += 1;
        }
        displayCalendar(selectedYear, selectedHalf);
    }

    function displayCalendar(year, half)
    {
        //check if buttons need to be disabled
        var nextBtn = document.getElementById(selectedYear+'-'+selectedHalf+'-next-btn');
        var prevBtn = document.getElementById(selectedYear+'-'+selectedHalf+'-prev-btn');
        if(selectedYear == CURRENT_YEAR + 1 && selectedHalf == 2) nextBtn.disabled = true;
        else nextBtn.disabled = false;
        if(selectedYear == CURRENT_YEAR - 2 && selectedHalf == 1) prevBtn.disabled = true;
        else prevBtn.disabled = false;

        //display the current calendar
        document.getElementById(year+"-"+half).classList.remove('hidden');
    }
}