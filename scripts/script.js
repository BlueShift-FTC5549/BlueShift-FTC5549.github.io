

URL="https://github.com/BlueShift-FTC5549/BlueShift-FTC5549.github.io"

commits = URL.document.getElementsByClassName('num text-emphasized')[0].innerText
branch = document.getElementsByClassName('num text-emphasized')[1].innerText
releases = document.getElementsByClassName('num text-emphasized')[2].innerText

commitsDisp = commits + "commits"
branchDisp = branch + "branches"
realesDisp = releases + "releases"