import { StaticImport } from "node_modules/next/dist/shared/lib/get-img-props"

type TextKhaldar = {
    img: string | StaticImport
    position: {
        x: number,
        y: number,
    }
}

