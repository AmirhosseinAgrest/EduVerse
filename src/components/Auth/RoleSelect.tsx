// src/components/Auth/RoleSelect.tsx
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type RoleSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const roles = [
  { value: "student", label: "Student" },
  { value: "pupil", label: "Pupil (K-12)" },
  { value: "teacher", label: "Teacher" },
  { value: "principal", label: "School Principal" },
  { value: "university-admin", label: "University Admin" },
  { value: "employer", label: "Employer" },
  { value: "other", label: "Other" },
];

export function RoleSelect({ value, onChange }: RoleSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Role</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
        <SelectContent>
          {roles.map((r) => (
            <SelectItem key={r.value} value={r.value}>
              {r.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
