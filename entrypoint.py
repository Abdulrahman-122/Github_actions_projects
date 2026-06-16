import os
from datetime import datetime,timezone

#this line take who_to_greet from github workflow file that you will specify 
name=os.getenv("INPUT_WHO_TO_GREET","world")

now=datetime.now(timezone.utc)
utc_time=now.strftime("%Y-%m-%d %H:%M:%S UTC")
# strftime -> string formating time function that mapping convert time into objects
greeting=f"Hello {name},current utc now is {utc_time}."

print(f"::notice::Greeting generated successfully")

#build a file contain the Greeting  from Github action
with open (os.environ["GITHUB_OUTPUT"]) as f:
    f.write(f"greeting={greeting}\n")
