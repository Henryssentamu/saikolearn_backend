from datetime import datetime
from secrets import randbelow


class IdGenerator:
    def __init__(self):
        self.year_prefix = str(datetime.now().year)[2:]
        self.student_prefix = 'sd'
        self.employee_prefix = 'ed'
        self.institute_prefix = 'SIST'
    def student(self):
        return f"{self.institute_prefix}/{self.year_prefix +  str(randbelow(10**4)).zfill(5)}/{self.student_prefix}"
    def employee(self):
        return f"{self.institute_prefix}/{self.year_prefix +  str(randbelow(100)).zfill(5)}/{self.employee_prefix}"
    

    
