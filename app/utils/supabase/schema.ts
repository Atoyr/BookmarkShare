export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      bookmark_gorup_definition_tags: {
        Row: {
          bookmark_group_id: string
          color: Database["public"]["Enums"]["color"]
          created_at: string
          id: string
          name: string
          version: number
        }
        Insert: {
          bookmark_group_id?: string
          color: Database["public"]["Enums"]["color"]
          created_at?: string
          id?: string
          name: string
          version?: number
        }
        Update: {
          bookmark_group_id?: string
          color?: Database["public"]["Enums"]["color"]
          created_at?: string
          id?: string
          name?: string
          version?: number
        }
        Relationships: []
      }
      bookmark_groups: {
        Row: {
          created_at: string
          id: string
          name: string
          space_id: string
          version: number
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          space_id?: string
          version?: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          space_id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "bookmark_groups_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      bookmark_tags: {
        Row: {
          bookmark_group_id: string
          bookmark_id: string
          created_at: string
          id: string
          tag_id: string
          version: number
        }
        Insert: {
          bookmark_group_id?: string
          bookmark_id?: string
          created_at?: string
          id?: string
          tag_id?: string
          version?: number
        }
        Update: {
          bookmark_group_id?: string
          bookmark_id?: string
          created_at?: string
          id?: string
          tag_id?: string
          version?: number
        }
        Relationships: []
      }
      bookmarks: {
        Row: {
          bookmark_group_id: string
          create_user_id: string
          created_at: string
          id: string
          last_update_user_id: string
          modified_at: string
          space_id: string
          title: string
          url: string
          version: number
        }
        Insert: {
          bookmark_group_id?: string
          create_user_id?: string
          created_at?: string
          id?: string
          last_update_user_id?: string
          modified_at?: string
          space_id?: string
          title?: string
          url?: string
          version?: number
        }
        Update: {
          bookmark_group_id?: string
          create_user_id?: string
          created_at?: string
          id?: string
          last_update_user_id?: string
          modified_at?: string
          space_id?: string
          title?: string
          url?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_bookmark_group_id_fkey"
            columns: ["bookmark_group_id"]
            isOneToOne: false
            referencedRelation: "bookmark_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_create_user_id_fkey"
            columns: ["create_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "bookmarks_last_update_user_id_fkey"
            columns: ["last_update_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "bookmarks_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          user_id: string
          username: string
          version: number
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          user_id?: string
          username?: string
          version?: number
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          user_id?: string
          username?: string
          version?: number
        }
        Relationships: []
      }
      space_members: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["space_role"]
          space_id: string
          user_id: string
          version: number
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["space_role"]
          space_id?: string
          user_id?: string
          version?: number
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["space_role"]
          space_id?: string
          user_id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "space_members_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "space_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      spaces: {
        Row: {
          created_at: string
          id: string
          is_private: boolean
          name: string
          version: number
        }
        Insert: {
          created_at?: string
          id?: string
          is_private?: boolean
          name?: string
          version?: number
        }
        Update: {
          created_at?: string
          id?: string
          is_private?: boolean
          name?: string
          version?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      color: "red" | "blue" | "green" | "yellow" | "cyan" | "magenta"
      space_role: "owner" | "member"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

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
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

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
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

