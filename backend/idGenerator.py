import secrets

class GenerateIds:
    def __init__(self):
        self.institute_prefix = "SIST"
        
    def studentId(self):
        return f"{self.institute_prefix }{str(secrets.randbelow(100000)).zfill(5)}/NA"  # Generates unique ID
    
    def school_Id(self):
        return f"{self.institute_prefix }{str(secrets.randbelow(1000)).zfill(4)}/Sch"  # Generates unique ID

    def course_Id(self):
        return f"{self.institute_prefix }{str(secrets.randbelow(1000)).zfill(4)}/cos"  # Generates unique ID
    
    def cohort_Id(self):
        return f"{self.institute_prefix }{str(secrets.randbelow(1000)).zfill(4)}/coh"  # Generates unique ID
    def employeeId(self):
        return f"{self.institute_prefix }{str(secrets.randbelow(100000)).zfill(5)}/NA"  # Generates unique ID

