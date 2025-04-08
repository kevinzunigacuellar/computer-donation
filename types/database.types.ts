export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      donation_submission_items: {
        Row: {
          condition_status:
            | Database["public"]["Enums"]["donation_item_condition"]
            | null;
          created_at: string | null;
          donation_submission_id: number | null;
          id: number;
          name: string;
          quantity: number | null;
          status:
            | Database["public"]["Enums"]["donation_submission_item_status"]
            | null;
          updated_at: string | null;
        };
        Insert: {
          condition_status?:
            | Database["public"]["Enums"]["donation_item_condition"]
            | null;
          created_at?: string | null;
          donation_submission_id?: number | null;
          id?: number;
          name: string;
          quantity?: number | null;
          status?:
            | Database["public"]["Enums"]["donation_submission_item_status"]
            | null;
          updated_at?: string | null;
        };
        Update: {
          condition_status?:
            | Database["public"]["Enums"]["donation_item_condition"]
            | null;
          created_at?: string | null;
          donation_submission_id?: number | null;
          id?: number;
          name?: string;
          quantity?: number | null;
          status?:
            | Database["public"]["Enums"]["donation_submission_item_status"]
            | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "donation_submission_items_donation_submission_id_fkey";
            columns: ["donation_submission_id"];
            isOneToOne: false;
            referencedRelation: "donation_submissions";
            referencedColumns: ["id"];
          },
        ];
      };
      donation_submissions: {
        Row: {
          created_at: string | null;
          donor_id: number | null;
          id: number;
          status:
            | Database["public"]["Enums"]["donation_submission_status"]
            | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          donor_id?: number | null;
          id?: number;
          status?:
            | Database["public"]["Enums"]["donation_submission_status"]
            | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          donor_id?: number | null;
          id?: number;
          status?:
            | Database["public"]["Enums"]["donation_submission_status"]
            | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "donation_submissions_donor_id_fkey";
            columns: ["donor_id"];
            isOneToOne: false;
            referencedRelation: "donors";
            referencedColumns: ["id"];
          },
        ];
      };
      donors: {
        Row: {
          email: string | null;
          id: number;
          name: string;
          phone: string | null;
        };
        Insert: {
          email?: string | null;
          id?: number;
          name: string;
          phone?: string | null;
        };
        Update: {
          email?: string | null;
          id?: number;
          name?: string;
          phone?: string | null;
        };
        Relationships: [];
      };
      inventory: {
        Row: {
          created_at: string | null;
          id: number;
          location_id: number | null;
          make: string | null;
          model: string | null;
          ram: number;
          received_by: string | null;
          status: Database["public"]["Enums"]["inventory_status"] | null;
          storage: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          location_id?: number | null;
          make?: string | null;
          model?: string | null;
          ram: number;
          received_by?: string | null;
          status?: Database["public"]["Enums"]["inventory_status"] | null;
          storage: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          location_id?: number | null;
          make?: string | null;
          model?: string | null;
          ram?: number;
          received_by?: string | null;
          status?: Database["public"]["Enums"]["inventory_status"] | null;
          storage?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "inventory_location_id_fkey";
            columns: ["location_id"];
            isOneToOne: false;
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "inventory_received_by_fkey";
            columns: ["received_by"];
            isOneToOne: false;
            referencedRelation: "staff";
            referencedColumns: ["id"];
          },
        ];
      };
      locations: {
        Row: {
          address: string | null;
          id: number;
          name: string;
        };
        Insert: {
          address?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          address?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      staff: {
        Row: {
          id: string;
          name: string | null;
        };
        Insert: {
          id: string;
          name?: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      donation_item_condition: "Good" | "Needs Repair" | "Rejected";
      donation_submission_item_status: "Pending" | "Accepted" | "Rejected";
      donation_submission_status: "Pending" | "Approved" | "Rejected";
      inventory_status: "Available" | "Reserved" | "Redistributed";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
