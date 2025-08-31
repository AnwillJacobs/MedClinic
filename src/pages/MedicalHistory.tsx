import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, FileText, Pill, AlertTriangle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const MedicalHistory = () => {
  const { patientId } = useParams();

  // Mock patient medical history data
  const patient = {
    id: "1",
    name: "John Smith",
    age: 45,
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567"
  };

  const medicalHistory = [
    {
      id: "1",
      date: "2024-01-15",
      type: "Consultation",
      diagnosis: "Upper Respiratory Infection",
      symptoms: "Cough, fever, sore throat",
      treatment: "Prescribed antibiotics",
      doctor: "Dr. Johnson"
    },
    {
      id: "2",
      date: "2023-12-20",
      type: "Follow-up",
      diagnosis: "Hypertension Management",
      symptoms: "Elevated blood pressure",
      treatment: "Medication adjustment",
      doctor: "Dr. Johnson"
    },
    {
      id: "3",
      date: "2023-11-10",
      type: "Emergency",
      diagnosis: "Allergic Reaction",
      symptoms: "Skin rash, swelling",
      treatment: "Antihistamines, observation",
      doctor: "Dr. Emergency"
    }
  ];

  const allergies = ["Penicillin", "Shellfish"];
  const currentMedications = [
    { name: "Lisinopril 10mg", frequency: "Once daily" },
    { name: "Metformin 850mg", frequency: "Twice daily" }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="flex items-center mb-8">
        <Link to="/patients">
          <Button variant="outline" size="sm" className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Medical History</h1>
          <p className="text-muted-foreground">{patient.name} - Patient ID: {patient.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Name</Label>
                <p className="text-sm text-muted-foreground">{patient.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Age</Label>
                <p className="text-sm text-muted-foreground">{patient.age} years old</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Email</Label>
                <p className="text-sm text-muted-foreground">{patient.email}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Phone</Label>
                <p className="text-sm text-muted-foreground">{patient.phone}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4 text-destructive" />
                Allergies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {allergies.map((allergy, index) => (
                  <Badge key={index} variant="destructive">
                    {allergy}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="mr-2 h-4 w-4" />
                Current Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentMedications.map((medication, index) => (
                  <div key={index}>
                    <p className="text-sm font-medium">{medication.name}</p>
                    <p className="text-xs text-muted-foreground">{medication.frequency}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Medical History */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Medical History Timeline
              </CardTitle>
              <CardDescription>Complete medical history and consultations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {medicalHistory.map((record, index) => (
                  <div key={record.id}>
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{record.diagnosis}</h3>
                          <Badge variant="outline">{record.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {record.date} • {record.doctor}
                        </p>
                        <div className="space-y-2">
                          <div>
                            <Label className="text-sm font-medium">Symptoms:</Label>
                            <p className="text-sm text-muted-foreground">{record.symptoms}</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Treatment:</Label>
                            <p className="text-sm text-muted-foreground">{record.treatment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < medicalHistory.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;