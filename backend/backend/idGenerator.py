import secrets

class GenerateIds:
    def __init__(self):
        self.studentId_prefix = "SIST"
    def studentId(self):
        return f"{self.studentId_prefix}{str(secrets.randbelow(100000)).zfill(5)}/NA"  # Generates unique ID
