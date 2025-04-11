import secrets

class GenerateIds:
    def __init__(self):
        self.studentId_prefix = "SIST"
        self.schoolId_prefix = "SIST"
        self.courseId_prefix = "SIST"
    def studentId(self):
        return f"{self.studentId_prefix}{str(secrets.randbelow(100000)).zfill(5)}/NA"  # Generates unique ID
    
    def school_Id(self):
        return f"{self.schoolId_prefix}{str(secrets.randbelow(1000)).zfill(4)}/Sch"  # Generates unique ID

    def course_Id(self):
        return f"{self.courseId_prefix}{str(secrets.randbelow(1000)).zfill(4)}/cos"  # Generates unique ID
