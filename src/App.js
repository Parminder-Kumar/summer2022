import imag from './Schedule.png';
import './index.css';

function App() {
  return (
    <div class="container">
        <div>
            <h1>Summer 2022 Classes</h1>
            <ul id="list">
                
                <li><h3>CSCI 355</h3>
                    <ul>
                        <li><a href="https://bbhosted.cuny.edu/webapps/blackboard/execute/modulepage/view?course_id=_2134898_1&cmp_tab_id=_3331640_1&mode=view">Blackboard</a></li>
                        <li><a href="https://us02web.zoom.us/w/81805739715?tk=hWL44m8fhJi0dQ1uuc5A9Kl4ESJ0j9wHoD3xmBiwwzc.DQMAAAATDACGwxZkSEczQ3IzYlJ6eW5kTWxvYkJKX0ZBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=bKhDX3tulTogsMwmTizcW1blVGS-xA.1">Zoom</a></li>
                        <li><a href="https://app.tophat.com/e/908340/lecture/">TopHat</a></li>
                        <li><a href="https://learn.zybooks.com/zybook/CUNYCSCI355655TeitelmanSummer2022">Zybooks</a></li>
                        <li><a href="https://csci355-summer2022.slack.com">Slack</a></li>
                        <li><a href="https://drive.google.com/drive/folders/11mWopesSWOTVo2_Ya-8AUvvmgnKQD9Wo?usp=sharing">Google Drive</a></li>
                        
                    </ul>
                </li>
                <li><h3>CSCI 323</h3>
                    <ul>
                        <li><a href="https://bbhosted.cuny.edu/webapps/blackboard/execute/modulepage/view?course_id=_2134892_1&cmp_tab_id=_3331628_1&mode=view">Blackboard</a></li>
                        <li><a href="https://us02web.zoom.us/w/82051149762?tk=2sIRoSkOHP9RvWdEiIAIQWkjmL_3nYlAxzpVbCuPXTg.DQMAAAATGqEvwhZWa0FIQ09LWFFER0ctcUQ3LWZqcWtnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=XzTOAjt2Is76o8w2W7hfmphb7xdkAR.1">Zoom</a></li>
                        <li><a href="https://app.tophat.com/e/821719/lecture/">TopHat</a></li>
                        <li><a href="https://learn.zybooks.com/zybook/CUNYCSCI323TeitelmanSummer2022">Zybooks</a></li>
                        <li><a href="https://csci323-summer2022.slack.com">Slack</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1bPo01HriR8NZp0B_i_gqZ5nQZG57Os9r">Google Drive</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <div>

            <h1>Resources</h1>
            <ul id="list">
                
                <li><h3>CSCI 355</h3>
                    <ul>
                        <li><a href="https://docs.google.com/document/d/1kTWJvbfEdyp2TGLWopnneLdtJLsrnai-ug_I5yjjNng/edit?usp=sharing">Announcements</a></li>
                        <li><a href="https://gaia.cs.umass.edu/kurose_ross/ppt.php">PowerPoints</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1XKGIaX7LykMU70AkZx968z666ysYrCeD?usp=sharing">Summer 2021 google drive</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1NnqB-4A_iH2x0BLkoGtNvX_0ZJ12a7rX?usp=sharing">Old HW and Exams</a></li>
                        <li><a href="https://quizlet.com/503955522/cs355-flash-cards/">Quizlet flashcards with some TopHat questions/answers</a></li>
                    </ul>
                </li>
                <li><h3>CSCI 323</h3>
                    <ul>
                        <li><a href="https://docs.google.com/document/d/147k14OZh3IDHzn6a_zGQq2-BI0qAj8gpz63EAbrIFQE/edit?usp=sharing">Announcements</a></li>
                        <li><a href="">Zoom</a></li>
                        <li><a href="https://drive.google.com/drive/folders/17XwgDYoe5sxcRIANCFg5ojU0j-3FiyRi?usp=sharing">Summer 2019 material</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1QmTB5xx3ck5LSD7nwIlf9-vjinmk-we2?usp=sharing">Summer 2021 material</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <shedule>

            <h1>Schedule</h1>
            <img src={imag} alt=""></img>
        </shedule>
        
    </div> 
  );
}

export default App;
