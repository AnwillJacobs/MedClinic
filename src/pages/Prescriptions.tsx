import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock prescription data
  const prescriptions = [
    {
      id: "RX001",
      patientName: "John Smith",
      medication: "Amoxicillin 500mg",
      dosage: "3 times daily",
      duration: "7 days",
      date: "2024-01-15",
      status: "Active"
    },
    {
      id: "RX002",
      patientName: "Sarah Johnson",
      medication: "Ibuprofen 400mg",
      dosage: "As needed",
      duration: "14 days",
      date: "2024-01-10",
      status: "Completed"
    },
    {
      id: "RX003",
      patientName: "Mike Davis",
      medication: "Metformin 850mg",
      dosage: "2 times daily",
      duration: "Ongoing",
      date: "2024-01-08",
      status: "Active"
    }
  ];

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
          <p className="text-muted-foreground">Manage patient prescriptions and medications</p>
        </div>
        <Link to="/prescriptions/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Prescription
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Prescription List</CardTitle>
          <CardDescription>View and manage all prescriptions</CardDescription>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search prescriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prescription ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrescriptions.map((prescription) => (
                <TableRow key={prescription.id}>
                  <TableCell className="font-medium">{prescription.id}</TableCell>
                  <TableCell>{prescription.patientName}</TableCell>
                  <TableCell>{prescription.medication}</TableCell>
                  <TableCell>{prescription.dosage}</TableCell>
                  <TableCell>{prescription.duration}</TableCell>
                  <TableCell>{prescription.date}</TableCell>
                  <TableCell>
                    <Badge variant={prescription.status === "Active" ? "default" : "secondary"}>
                      {prescription.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link to={`/prescriptions/${prescription.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Prescriptions;