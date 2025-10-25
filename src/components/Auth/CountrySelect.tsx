// src/components/Auth/CountrySelect.tsx
import { Label } from "@/components/ui/label";
import Select from "react-select";
import { useMemo } from "react";

/**
 * NOTES:
 * - This uses react-select for searchable, alphabetized country list.
 * - For full list, install a data source (e.g., i18n-iso-countries + locales) or provide a JSON.
 * - Here we include a robust default list and sort it alphabetically.
 *
 * If you prefer to source countries from a file, create:
 *   src/lib/countries.ts
 * and export a string[] of country names; then replace the `defaultCountries` with that import.
 */

type CountryOption = { value: string; label: string };

type CountrySelectProps = {
    value?: CountryOption | null;
    onChange?: (value: CountryOption | null) => void;
};

const defaultCountries = [
    // A substantial coverage list (alphabetized). You can replace with a full dataset when desired.
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Republic)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe",
];

export function CountrySelect({ value, onChange }: CountrySelectProps) {
    const options = useMemo<CountryOption[]>(
        () => defaultCountries.sort((a, b) => a.localeCompare(b)).map((c) => ({ value: c, label: c })),
        []
    );

    return (
        <div className="space-y-2">
            <Label>Country</Label>
            <Select
                inputId="country-select"
                options={options}
                value={value ?? null}
                onChange={onChange}
                placeholder="Select your country"
                classNamePrefix="react-select"
                styles={{
                    control: (base) => ({
                        ...base,
                        borderWidth: 2,
                        borderColor: "hsl(var(--border))",
                        backgroundColor: "hsl(var(--card))",
                        color: "hsl(var(--foreground))", // 👈 متن داخل کنترل
                        boxShadow: "none",
                    }),
                    menu: (base) => ({
                        ...base,
                        zIndex: 50,
                        backgroundColor: "hsl(var(--popover))", // 👈 پس‌زمینه‌ی منو
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                            ? "hsl(var(--accent))"
                            : "hsl(var(--card))", // 👈 حالت انتخاب‌شده و معمولی
                        color: "hsl(var(--foreground))",
                        cursor: "pointer",
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: "hsl(var(--foreground))", // 👈 متن انتخاب‌شده داخل کنترل
                    }),
                    input: (base) => ({
                        ...base,
                        color: "hsl(var(--foreground))", // 👈 متن داخل input جست‌وجو
                    }),
                }}

                isSearchable
            />
        </div>
    );
}