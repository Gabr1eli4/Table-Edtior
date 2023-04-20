export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			cars: {
				Row: {
					brand: string | null;
					created_at: string | null;
					id: number;
					model: string | null;
					test: string | null;
				};
				Insert: {
					brand?: string | null;
					created_at?: string | null;
					id?: number;
					model?: string | null;
					test?: string | null;
				};
				Update: {
					brand?: string | null;
					created_at?: string | null;
					id?: number;
					model?: string | null;
					test?: string | null;
				};
			};
			test: {
				Row: {
					created_at: string | null;
					id: number;
					rating: number | null;
					text: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					rating?: number | null;
					text?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					rating?: number | null;
					text?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			get_all_tables: {
				Args: Record<PropertyKey, never>;
				Returns: {
					table_name: string;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
