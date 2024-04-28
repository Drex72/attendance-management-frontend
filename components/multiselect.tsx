/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/MqMxzyhzjGb
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"

const countryList = [{key: "1", label: "ENG", value: "en", img: "/us-flag.png"}, {key: "2", label: "ESP", value: "es", img: "/esp.png"},{key: "3", label: "FR", value: "fr", img: "/fr.png"},]
export function Multiselect() {
  return (
    <Select>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={<div className="flex items-center gap-2">
          <div>
          <div className="w-4 h-4">
              <img
                alt="British flag"
                height="100%"
                src={countryList[0].img}
                style={{
                  aspectRatio: "24/24",
                  objectFit: "cover",
                }}
                width="100%"
              />
              </div>
          </div>
              
              {countryList[0].label}
            </div>} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {countryList.map((list, index) => (
            <SelectItem value={list.value}>
            <div className="flex items-center gap-2">
              <div>
              <div className="w-4 h-4">
              <img
                alt="British flag"
                height="100%"
                src={list.img}
                style={{
                  aspectRatio: "24/24",
                  objectFit: "cover",
                }}
                width="100%"
              />
                </div>
              </div>
              
              {list.label}
            </div>
          </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
