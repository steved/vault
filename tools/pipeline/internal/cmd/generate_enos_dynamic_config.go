// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: BUSL-1.1

package cmd

import (
	"context"

	"github.com/hashicorp/vault/tools/pipeline/internal/pkg/generate"
	"github.com/hashicorp/vault/tools/pipeline/internal/pkg/releases"
	"github.com/spf13/cobra"
)

// skipVersionsDefault are versions that we skip by default. This list can grow as necessary.
var skipVersionsDefault = []string{
	"1.16.0", // 1.16.0 artifacts were revoked, always skip it if it's in the range
}

var genEnosDynamicConfigReq = &generate.EnosDynamicConfigReq{
	VersionLister: releases.NewClient(),
}

func newGenerateEnosDynamicConfigCmd() *cobra.Command {
	enosDynCfgCmd := &cobra.Command{
		Use:   "enos-dynamic-config",
		Short: "Generate dynamic Enos configuration files",
		Long: `Create branch specific Enos configuration dynamically. We do this to set the various
sample attribute variables on per-branch basis.`,
		RunE: runGenerateEnosDynamicConfig,
	}

	enosDynCfgCmd.PersistentFlags().StringVarP(&genEnosDynamicConfigReq.VaultVersion, "version", "v", "", "The version of Vault")
	enosDynCfgCmd.PersistentFlags().StringVarP(&genEnosDynamicConfigReq.VaultEdition, "edition", "e", "", "The edition of Vault. Can either be 'ce' or 'enterprise'")
	enosDynCfgCmd.PersistentFlags().StringVarP(&genEnosDynamicConfigReq.EnosDir, "dir", "d", ".", "The enos directory to create the configuration in")
	enosDynCfgCmd.PersistentFlags().UintVarP(&genEnosDynamicConfigReq.NMinus, "nminus", "n", 3, "Instead of setting a dedicated lower bound, calculate N-X from the upper")
	enosDynCfgCmd.PersistentFlags().StringSliceVarP(&genEnosDynamicConfigReq.Skip, "skip", "s", skipVersionsDefault, "Skip these versions. Can be provided none-to-many times")
	enosDynCfgCmd.PersistentFlags().StringVar(&genEnosDynamicConfigReq.FileName, "file", "enos-dynamic-config.hcl", "The name of the file to write the configuration into")

	err := enosDynCfgCmd.MarkPersistentFlagRequired("edition")
	if err != nil {
		panic(err)
	}
	err = enosDynCfgCmd.MarkPersistentFlagRequired("version")
	if err != nil {
		panic(err)
	}

	return enosDynCfgCmd
}

func runGenerateEnosDynamicConfig(cmd *cobra.Command, args []string) error {
	cmd.SilenceUsage = true // Don't spam the usage on failure

	_, err := genEnosDynamicConfigReq.Run(context.TODO())

	return err
}
