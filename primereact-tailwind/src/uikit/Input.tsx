import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ButtonGroup } from "primereact/buttongroup";
import { SplitButton } from "primereact/splitbutton";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { Rating, RatingChangeEvent } from "primereact/rating";
import { Knob } from "primereact/knob";
import { ColorPicker, ColorPickerChangeEvent } from "primereact/colorpicker";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { InputSwitch } from "primereact/inputswitch";
import { ListBox, ListBoxChangeEvent } from "primereact/listbox";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";

function LxmInput() {
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {},
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {},
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {},
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {},
    },
  ];
  const save = () => {};

  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const [autoCompleteValue, setValue] = useState<string>("");
  const [autoCompleteItems, setItems] = useState<string[]>([]);

  const autoCompleteSearch = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  const [inputNumberValue3, setInputNumberValue3] = useState<number>(25);
  const [chipsValue, setChipsValue] = useState<string[]>([
    "sddf bdfsa",
    "bb",
    "cc",
  ]);
  const [sliderValue, setSliderValue] = useState<number | [number, number]>(50);
  const [ratingValue, setRatingValue] = useState<number>();
  const [knobValue, setKnobValue] = useState<number>(60);
  const [colorPickerValue, setColorPickerValue] = useState<string>();

  const [ingredients, setIngredients] = useState<string[]>([]);

  const onIngredientsChange = (e: CheckboxChangeEvent) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };

  const [checked, setChecked] = useState(false);

  interface City {
    name: string;
    code: string;
  }
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedCities, setSelectedCities] = useState<City | null>(null);
  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [toggleButtonChecked, setToggleButtonChecked] =
    useState<boolean>(false);

  const selectButtonItems: string[] = ["Off", "On"];
  const [selectButtonValue, setSelectButtonValue] = useState<string>(
    selectButtonItems[0],
  );

  interface SelectItem {
    name: string;
    value: number;
  }
  const multiSelectButtonItems: SelectItem[] = [
    { name: "Option 1", value: 1 },
    { name: "Option 2", value: 2 },
    { name: "Option 3", value: 3 },
  ];
  const [multiSelectButtonValue, setMultiSelectButtonValue] =
    useState<SelectItem>();

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
      <div className="grid gap-4">
        <Card>
          <div className="m-0 flex flex-wrap gap-2">
            <h5 className="w-full">InputText</h5>
            <InputText placeholder="Default" className="w-full lg:w-40" />
            <InputText
              disabled
              placeholder="Disabled"
              className="w-full lg:w-40"
            />
            <InputText
              invalid
              placeholder="Invalid"
              className="w-full lg:w-40"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Icons</h5>
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText v-model="value1" placeholder="Search" />
            </IconField>
            <IconField>
              <InputText v-model="value1" placeholder="Search" />
              <InputIcon className="pi pi-search"> </InputIcon>
            </IconField>
            <IconField>
              <InputIcon className="pi pi-user"> </InputIcon>
              <InputText v-model="value1" placeholder="Search" />
              <InputIcon className="pi pi-search"> </InputIcon>
            </IconField>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Float Label</h5>
            <FloatLabel>
              <InputText id="username" />
              <label htmlFor="username">Username</label>
            </FloatLabel>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Textarea</h5>
            <InputTextarea rows={5} cols={30} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">AutoComplete</h5>
            <AutoComplete
              value={autoCompleteValue}
              suggestions={autoCompleteItems}
              completeMethod={autoCompleteSearch}
              onChange={(e) => setValue(e.value)}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Calendar</h5>
            <Calendar />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">InputNumber</h5>
            <InputNumber
              inputId="minmax-buttons"
              value={inputNumberValue3}
              onValueChange={(e: InputNumberValueChangeEvent) =>
                setInputNumberValue3(e.value ?? 0)
              }
              mode="decimal"
              showButtons
              min={0}
              max={100}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Chips</h5>
            <Chips
              value={chipsValue}
              onChange={(e: ChipsChangeEvent) => setChipsValue(e.value ?? [])}
              separator=","
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-wrap gap-2">
            <h5 className="w-full">Slider</h5>
            <div className="w-96">
              <InputText
                value={sliderValue.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(e.target.value, 10);
                  if (!isNaN(value)) {
                    setSliderValue(value);
                  }
                }}
                className="w-full"
              />
              <Slider
                value={sliderValue}
                onChange={(e: SliderChangeEvent) => setSliderValue(e.value)}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="flex w-48 flex-wrap gap-2">
              <h5 className="w-full">Rating</h5>
              <Rating
                value={ratingValue}
                onChange={(e: RatingChangeEvent) =>
                  setRatingValue(e.value ?? undefined)
                }
              />
            </div>
            <div className="flex w-48 flex-wrap gap-2">
              <h5 className="w-full">ColorPicker</h5>
              <ColorPicker
                value={colorPickerValue}
                onChange={(e: ColorPickerChangeEvent) =>
                  setColorPickerValue(
                    typeof e.value === "string" ? e.value : undefined,
                  )
                }
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Knob</h5>
            <Knob
              value={knobValue}
              onChange={(e) => setKnobValue(e.value)}
              valueTemplate={"{value}%"}
            />
          </div>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card>
          <div className="flex flex-wrap gap-2">
            <h5 className="w-full">RadioButton</h5>
            <div className="flex flex-wrap gap-3">
              <div className="align-items-center flex">
                <RadioButton
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                />
                <label htmlFor="ingredient1" className="ml-2">
                  Cheese
                </label>
              </div>
              <div className="align-items-center flex">
                <RadioButton
                  inputId="ingredient2"
                  name="pizza"
                  value="Mushroom"
                />
                <label htmlFor="ingredient2" className="ml-2">
                  Mushroom
                </label>
              </div>
              <div className="align-items-center flex">
                <RadioButton
                  inputId="ingredient3"
                  name="pizza"
                  value="Pepper"
                />
                <label htmlFor="ingredient3" className="ml-2">
                  Pepper
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Input Switch</h5>
            <div className="card justify-content-center flex flex-wrap gap-3">
              <div className="align-items-center flex">
                <Checkbox
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes("Cheese")}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  Cheese
                </label>
              </div>
              <div className="align-items-center flex">
                <Checkbox
                  inputId="ingredient2"
                  name="pizza"
                  value="Mushroom"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes("Mushroom")}
                />
                <label htmlFor="ingredient2" className="ml-2">
                  Mushroom
                </label>
              </div>
              <div className="align-items-center flex">
                <Checkbox
                  inputId="ingredient3"
                  name="pizza"
                  value="Pepper"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes("Pepper")}
                />
                <label htmlFor="ingredient3" className="ml-2">
                  Pepper
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Input Switch</h5>
            <InputSwitch
              checked={checked}
              onChange={(e) => setChecked(e.value)}
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-wrap gap-2">
            <h5 className="w-full">Listbox</h5>
            <ListBox
              filter
              value={selectedCity}
              onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              className="w-full md:w-56"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">Dropdown</h5>
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Select a City"
              className="w-full md:w-56"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">MultiSelect</h5>
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={cities}
              optionLabel="name"
              display="chip"
              placeholder="Select Cities"
              maxSelectedLabels={3}
              className="w-full md:w-80"
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-wrap gap-2">
            <h5 className="w-full">ToggleButton</h5>
            {/* <ToggleButton
              checked={toggleButtonChecked}
              onChange={(e) => setToggleButtonChecked(e.value)}
            /> */}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">SelectButton</h5>
            <SelectButton
              value={selectButtonValue}
              onChange={(e) => setSelectButtonValue(e.value)}
              options={selectButtonItems}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">SelectButton - Multiple</h5>
            <SelectButton
              value={multiSelectButtonValue}
              onChange={(e) => setMultiSelectButtonValue(e.value)}
              optionLabel="name"
              options={multiSelectButtonItems}
              multiple
            />
          </div>
        </Card>
      </div>

      <div className="grid gap-4">
        <Card>
          <div className="flex flex-wrap gap-2">
            <h5 className="w-full">Input Groups</h5>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Username" />
            </div>
            <div className="card justify-content-center flex">
              <div className="p-inputgroup md:w-30rem w-full">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-clock"></i>
                </span>
                <span className="p-inputgroup-addon">
                  <i className="pi pi-star-fill"></i>
                </span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">$</span>
                <span className="p-inputgroup-addon">.00</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <h5 className="w-full">SelectButton - Multiple</h5>
            <div className="p-inputgroup flex-1">
              <Button label="Search" />
              <InputText placeholder="Keyword" />
            </div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(!checked)}
                />
              </span>
              <InputText placeholder="Username" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LxmInput;
