import { Database } from "./schema";

export type TableType =
	Database["public"]["Functions"]["get_all_tables"]["Returns"][0];

export type PrimitiveType = string | Symbol | number | boolean;

export function isPrimitive(value: any): value is PrimitiveType {
	return (
		typeof value === "string" ||
		typeof value === "number" ||
		typeof value === "boolean" ||
		typeof value === "symbol"
	);
}

export interface MinTableItem {
	id: PrimitiveType;
}

export interface TableProps<T extends MinTableItem> {
	updateHandler: (table_name: string, id: PrimitiveType, data: {}) => void;
}
